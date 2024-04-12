import React, { useRef, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import * as emoji from 'node-emoji';

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
      if (commandRef.current.value === 'clear') {
        await setCommand([]);
      } else {
        await setCommand((command) => [...command, {
          // @ts-ignore
          command: commandRef.current.value,
          // @ts-ignore
          output: emoji.emojify(`:${commandRef.current.value}:`),
        }]);
      }

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
            <div className="text-blue-400 text-8xl">{item.output}</div>
          </div>;
        })}
        <div ref={lastCommandRef} />
      </div>
      <form className="flex items-center justify-between fixed bottom-0 w-full" onSubmit={onCommand} method="post">
        <div className="flex inline p-2 bg-slate-800 text-white">
          <MdArrowForwardIos className="text-base text-green-500" />
        </div>
        <input
          type="text" ref={commandRef}
          placeholder="Enter something fancy...Ex: help, cat, dog, fire, funny"
          className="flex w-screen p-2 bg-slate-950 text-sm placeholder-gray-500 text-gray-200 outline-none"
        />
      </form>
    </div>
  );
};
