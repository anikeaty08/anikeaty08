export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              I’m Aniket
            </h1>
            <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              building things with code, data, and a bit of curiosity ✨
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Interests</span>
              <p className="text-lg text-zinc-800 dark:text-zinc-200">
                🎮 Music • Games • Anime • Code • Art
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Focus</span>
              <p className="text-lg text-zinc-800 dark:text-zinc-200">
                🧠 ML • Agents • LLMs • Research
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
