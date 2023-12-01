//=components/card/Card.jsx

function Card({ imageUrl, title }) {
  return (
    <div className="relative flex h-auto max-w-md flex-col items-center justify-center overflow-visible bg-primary shadow-md md:max-w-md">
      <div className="h-96 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="absolute bottom-[-2rem] left-12 right-0 px-2 py-1 font-heading text-7xl font-semibold text-primary md:bottom-[-1.5rem] md:left-4 md:text-5xl">
        {title}
      </h2>
    </div>
  )
}

export default Card
