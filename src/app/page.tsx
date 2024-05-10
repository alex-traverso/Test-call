import { Title } from "@/components/Title";
import { transcriptionData } from "../data/call";

import { TranscriptItem } from "@/components/TranscriptItem";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-24">
			<Title title="Transcription Call" />
			<TranscriptItem transcript={transcriptionData} />
		</main>
	);
}
