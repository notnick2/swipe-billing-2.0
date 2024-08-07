import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tutorials = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'AIzaSyDaHir2NgtnBInYbQL1QqK9dbPily5E5zI';
    const CHANNEL_ID = 'UC4S-qpp7BCBiNHGRcpbQXEA';

    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            channelId: CHANNEL_ID,
            maxResults: 100,
            order: 'date',
            type: 'video',
            key: API_KEY
          }
        });

        const fetchedVideos = response.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails.medium.url,
          channelTitle: item.snippet.channelTitle
        }));

        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="p-10 flex flex-col overflow-y-auto transparent-container">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tutorials</h1>
        <select className="border rounded px-2 py-1">
          <option>ENGLISH</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <a 
          key={video.id} 
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative pb-[56.25%]">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold truncate">{video.title}</h2>
              <p className="text-xs text-gray-500 mt-1">{video.channelTitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;