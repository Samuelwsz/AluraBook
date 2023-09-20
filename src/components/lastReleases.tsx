interface Book {
  name: string
}

interface TesteProps {
  title: string
  titlebook?: string
  description?: string
  price?: string
  listBook: Book[]
}

export default function LastReleases({ title, listBook }: TesteProps) {
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
                  className="w-72 h-82 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-72 xl:h-72 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
