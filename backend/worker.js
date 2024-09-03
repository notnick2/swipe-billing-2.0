// serverless functions hosted on cloudflare workers

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    if (request.method === 'OPTIONS') {
      return handleCORS(request)
    }
  
    if (request.method !== 'POST') {
      return new Response('Please send a POST request', { 
        status: 405,
        headers: getCORSHeaders(request)
      })
    }
  
    try {
      const { message } = await request.json()
      if (!message) {
        return new Response('Message is required in the request body', { 
          status: 400,
          headers: getCORSHeaders(request)
        })
      }
  
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "you are assistant for a billing software named swipe billing. if asked about anything use generalized data to give the responses. you are available at the dashboard of the billing software so you have the complete data of their business so whenever they ask about their business or past billings give them response according to their data. as this is just the testing environment we dont have any real data so use some random but appropriate data to respond to the query. all prices in rupees"
            },
            {
              role: "user",
              content: message
            }
          ],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      })
  
      if (!openaiResponse.ok) {
        throw new Error(`OpenAI API responded with status ${openaiResponse.status}`)
      }
  
      const data = await openaiResponse.json()
      const aiResponse = data.choices[0].message.content
  
      return new Response(aiResponse, {
        headers: getCORSHeaders(request)
      })
  
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...getCORSHeaders(request)
        }
      })
    }
  }
  
  function handleCORS(request) {
    
    let headers = request.headers
    if (
      headers.get('Origin') !== null &&
      headers.get('Access-Control-Request-Method') !== null &&
      headers.get('Access-Control-Request-Headers') !== null
    ) {

      return new Response(null, {
        headers: getCORSHeaders(request),
      })
    } else {
      return new Response(null, {
        headers: {
          Allow: 'GET, HEAD, POST, OPTIONS',
        },
      })
    }
  }
  
  function getCORSHeaders(request) {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  }