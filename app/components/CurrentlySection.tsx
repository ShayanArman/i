'use client';

import { useState, useEffect } from 'react';
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

export default function CurrentlySection() {
  const [time, setTime] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getVancouverTime());

    const interval = setInterval(() => {
      setTime(getVancouverTime());
    }, 10000);

    // Fetch Vancouver weather from Open-Meteo (free, no API key needed)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data?.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          const wmoCode = data.current_weather.weathercode;
          // WMO weather codes to emoji
          let emoji = '🌡️';
          if (wmoCode === 0) emoji = '☀️';
          else if (wmoCode <= 3) emoji = '☁️';
          else if (wmoCode <= 48) emoji = '🌫️';
          else if (wmoCode <= 57) emoji = '🌧️';
          else if (wmoCode <= 65) emoji = '🌧️';
          else if (wmoCode <= 67) emoji = '🌧️';
          else if (wmoCode <= 75) emoji = '❄️';
          else if (wmoCode <= 77) emoji = '❄️';
          else if (wmoCode <= 82) emoji = '🌧️';
          else if (wmoCode <= 86) emoji = '❄️';
          else if (wmoCode <= 99) emoji = '⛈️';
          setWeather({ temp, emoji });
        }
      })
      .catch(() => {});

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
          Currently
        </h2>
        <p className="text-base text-gray-600">Building <LinkPreview href="https://zeroinbox.ai" className="transition-colors hover:opacity-80" style={{ color: 'lab(57.6104% 56.6725 33.4484)' }}>Zero Inbox</LinkPreview>.</p>
        <p className="text-base text-gray-600">Vancouver</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
        Currently
      </h2>
      <p className="text-base text-gray-600">Building <LinkPreview href="https://zeroinbox.ai" className="transition-colors hover:underline" style={{ color: 'lab(57.6104% 56.6725 33.4484)' }}>Zero Inbox</LinkPreview>.</p>
      <p className="text-base text-gray-600 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </span>
        Vancouver, {time}
        {weather && (
          <span className="ml-2">
            {weather.emoji} {weather.temp}°C
          </span>
        )}
      </p>
    </div>
  );
}
