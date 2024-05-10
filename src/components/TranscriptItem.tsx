"use client";
import React from "react";

interface Message {
	content: string;
	role: string;
	start: number;
	end: number;
}

export const TranscriptItem: React.FC<{ transcript: Message[] }> = ({
	transcript,
}) => {
	const audioRef = React.useRef<HTMLAudioElement>(null);

	const handleWordClick = (startTime: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime = startTime;
			audioRef.current.play();
		}
	};

	return (
		<div className="bg-gradient-to-bl from-slate-300 to-slate-100 p-10 rounded-lg shadow-md w-[60vw]">
			<audio ref={audioRef} controls className="mb-5 w-full">
				<source src="/audio/Test Call.wav" type="audio/mpeg" />
			</audio>
			{transcript.map((item, id) => (
				<p
					key={id}
					onClick={() => handleWordClick(item.start)}
					className="cursor-pointer text-sm hover:bg-yellow-200 transition-all mb-2"
				>
					{item.role.toUpperCase()}: {item.content}
				</p>
			))}
		</div>
	);
};
