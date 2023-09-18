import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function InputSearch() {
  return (
    <>
      <div className="flex text-center justify-center  bg-blue-900">
        <div className="text-white p-20 text-center">
          <h1 className="font-bold text-4xl mb-6">Já sabe por onde começar?</h1>
          <p className="font-semibold text-xl mb-6">
            Encontre em nossa estante o que precisa para seu desenvolvimento!
          </p>
          <div className="border-2 flex items-center w-80 max-w-full mx-auto rounded-3xl p-2">
            <MagnifyingGlassIcon className="h-6 w-6 ml-2" />
            <input
              type="text"
              className="flex-grow bg-transparent outline-0 text-lg ml-2"
              placeholder="Qual será sua próxima leitura?"
            />
          </div>
        </div>
      </div>
    </>
  )
}
