import React, { useRef, useEffect, useState } from 'react'

interface Commands {
  command: string;
  output: string | null;
}

export default function Terminal() {
  const commandRef = useRef<HTMLInputElement>(null);

  const lastCommandRef = useRef<HTMLInputElement>(null);

  const [commands, setCommand] = useState<Commands[]>([]);

  const onCommand = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (commandRef.current !== null) {
      await setCommand((command) => [...command, {
        // @ts-ignore
        command: commandRef.current.value,
        output: 'this is a sample output'
      }]);

      scrollToBottom();
      commandRef.current.value = '';
    }
  };

  const scrollToBottom = () => lastCommandRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <div className="max-h-screen overflow-y-scroll p-2 text-sm">
        {commands.map((item, key) => {
          return <div className="mb-1 text-white" key={key}>
            <div>{item.command}</div>
            <div className="text-blue-400">{item.output}</div>
          </div>;
        })}
        <div ref={lastCommandRef} />
      </div>
      <form onSubmit={onCommand} method="post">
        <input
          type="text" ref={commandRef}
          placeholder="Enter something fancy...Ex: help, cat, dog, fire, funny"
          className="fixed bottom-0 w-full p-2 bg-slate-950 text-sm placeholder-gray-500 text-gray-200 outline-none"
        />
      </form>
    </div>
  );
};
