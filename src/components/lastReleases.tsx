import { MouseEvent, useState } from "react"
import CardModal from "./cardModal"

interface Book {
  name: string
  titlebook?: string
  description?: string
  price?: string
}

interface LastReleasesProps {
  title: string
  listBook: Book[]
}

export default function LastReleases({ title, listBook }: LastReleasesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const openModal = (book: Book) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedBook(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-yellow-500 p-10 uppercase">
        {title}
      </h1>
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto ">
          <div className="flex flex-wrap -mx-4 justify-center">
            {listBook.map((book, index) => (
              <div
                key={index}
                className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4"
              >
                <img
                  src={book.name}
                  alt=""
                  className="w-72 h-82 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-72 xl:h-72 object-cover cursor-pointer"
                  onClick={() => openModal(book)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <CardModal
              titlebook={selectedBook?.titlebook}
              description={selectedBook?.description}
              price={selectedBook?.price}
            />
            <button onClick={closeModal}>Fechar Modal</button>
          </div>
        </div>
      )}
    </>
  )
}
