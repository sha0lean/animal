//=components/utils/Breakpoints.jsx

function Breakpoints() {
  return (
    <>
      <div className="h-full bg-slate-700 text-center opacity-30">
        <p className="hidden sm:block sm:bg-slate-700 md:hidden">small 480 px</p>
        <p className="hidden md:block md:bg-slate-700 lg:hidden">medium 768px</p>
        <p className="hidden lg:block lg:bg-slate-700 xl:hidden">large 976 px</p>
        <p className="hidden xl:block">xl 1440 px</p>
        <p className="h-screen"></p>
      </div>
    </>
  )
}

export default Breakpoints
