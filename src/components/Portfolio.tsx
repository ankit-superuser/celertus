import { Play } from "lucide-react";

const videos = [
    { title: "Project One" },
    { title: "Project Two" },
    { title: "Project Three" },
    { title: "Project Four" },
];

const Portfolio = () => (
    <div className="container mx-auto py-16 px-4 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {videos.map((video, idx) => (
            <div key={idx} className="bg-muted/10 rounded-xl p-6 flex flex-col items-center shadow-lg w-full max-w-xl mx-auto">
                <div className="w-full aspect-video bg-background border-2 border-primary/30 rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm">Upload your project video here.</p>
            </div>
        ))}
    </div>
);

export default Portfolio; 