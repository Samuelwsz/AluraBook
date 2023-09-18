const categories = [
  {
    name: "Android",
  },
  {
    name: "OO",
  },
  {
    name: "Marketing Digital",
  },
  {
    name: "Agilie",
  },
  {
    name: "Startups",
  },
  {
    name: "HTML & CSS",
  },
  {
    name: "Java",
  },
  {
    name: "Python",
  },
]

export default function SearchedCategories() {
  return (
    <>
      <div className="flex text-center justify-center  bg-blue-900 p-10 text-white">
        <div className="text-center">
          <h1 className="font-semibold mb-8 text-3xl uppercase">
            Categorias mais buscadas
          </h1>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <a
                key={cat.name}
                className="bg-yellow-500 p-4 text-3xl font-bold"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
