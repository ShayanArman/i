'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import LinkPreview from './LinkPreview';

function getVancouverTime() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Vancouver',
  });
}

interface WeatherData {
  temp: number;
  emoji: string;
}

function getWeatherEmoji(code: number): string {
  if (code >= 200 && code < 300) return '⛈️';
  if (code >= 300 && code < 400) return '🌧️';
  if (code >= 500 && code < 600) return '🌧️';
  if (code >= 600 && code < 700) return '❄️';
  if (code >= 700 && code < 800) return '🌫️';
  if (code === 800) return '☀️';
  if (code === 801) return '🌤️';
  if (code >= 802 && code <= 804) return '☁️';
  return '🌡️';
}

function subscribeToVancouverTime(onStoreChange: () => void) {
  const interval = setInterval(onStoreChange, 10000);
  return () => clearInterval(interval);
}

function getServerTimeSnapshot() {
  return '';
}

export default function CurrentlySection() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const time = useSyncExternalStore(
    subscribeToVancouverTime,
    getVancouverTime,
    getServerTimeSnapshot
  );

  useEffect(() => {
    // Fetch Vancouver weather from Open-Meteo (free, no API key needed)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data?.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          const wmoCode = data.current_weather.weathercode;
          const emoji = getWeatherEmoji(wmoCode);
          setWeather({ temp, emoji });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
        Currently
      </h2>
      <p className="text-base text-gray-600">Building <LinkPreview href="https://zeroinbox.ai" className="transition-colors hover:underline" style={{ color: 'var(--lab-color)' }}>Zero Inbox</LinkPreview>.</p>
      <p className="text-base text-gray-600 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </span>
        Vancouver{time ? `, ${time}` : ''}
        {weather && (
          <span className="ml-2">
            {weather.emoji} {weather.temp}°C
          </span>
        )}
      </p>
    </div>
  );
}
