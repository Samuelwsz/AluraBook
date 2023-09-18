import { InboxIcon } from "@heroicons/react/24/outline"

export default function NewsByEmail() {
  return (
    <>
      <div className="flex justify-center items-center bg-white p-5 ">
        <div className="flex flex-col justify-center items-center max-w-md p-4 space-y-6 w-72 ">
          <div className="flex text-blue-900 flex-col sm:flex-row items-center ">
            <div className="sm:w-1/2 flex-grow ">
              <h2 className="text-2xl font-bold mb-4  sm:max-w-md w-72 ">
                Fique por dentro das novidades!
              </h2>
              <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            </div>

            <div className="sm:w-1/2 border-2 border-blue-900 flex items-center rounded-3xl p-2 mt-4 sm:mt-0">
              <InboxIcon className="h-6 w-6 ml-2" />
              <input
                type="text"
                className="flex-grow bg-transparent outline-0 text-lg ml-2 w-full sm:w-72 "
                placeholder="Cadastre seu e-mail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
