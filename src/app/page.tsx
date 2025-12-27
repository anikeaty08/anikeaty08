export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-20 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          
          {/* Main Typing SVG Effect */}
          <div className="w-full flex justify-center">
            <img 
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&duration=3500&pause=900&center=true&vCenter=true&width=800&lines=AI+%26+ML+Engineer;Agents+%E2%80%A2+LLMs+%E2%80%A2+Reasoning;Shipping+bold+ideas" 
              alt="Aniket's Roles"
            />
          </div>

          {/* Social Badges */}
          <div className="flex flex-wrap justify-center gap-3 py-4">
            <a href="mailto:aniket@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Gmail-aniket@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
            </a>
            <a href="https://x.com/aniket" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/X-@aniket-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
            </a>
            <a href="https://github.com/aniket" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-aniket-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
          </div>

          {/* Greeting Typing SVG */}
          <div className="w-full flex justify-center mt-4">
            <img 
              src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=50&duration=4000&pause=300&color=A7A459&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Hi+there!;I'm+Aniket%2C+a+good+person+and+ambiivert+%E2%9C%A9" 
              alt="Greeting"
              className="max-w-full"
            />
          </div>

          {/* Interests & Focus */}
          <div className="flex flex-col gap-6 pt-8">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <pre className="text-zinc-800 dark:text-zinc-200 font-mono text-lg whitespace-pre-wrap">
                🎮 Music • Games • Anime • Code • Art{"\n"}
                🧠 ML • Agents • LLMs • Research
              </pre>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
