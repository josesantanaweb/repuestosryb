const Skeleton = () => {
  return (
    <div className="relative flex flex-col p-5 border border-gray-200 cursor-pointer animate-pulse" id="catalogo">
      <span className="w-10 h-4 col-span-1 mb-3 rounded bg-slate-200"></span>
      <div className="flex items-center justify-center mb-3 overflow-hidden bg-white-200 h-[170px]">
        <span className="w-full h-full rounded-lg bg-slate-200"></span>
      </div>
      <span className="w-[200px] h-4 rounded-lg bg-slate-200 mb-3"></span>
      <span className="w-[100px] h-4 rounded-lg bg-slate-200 mb-3"></span>
      <span className="w-[100px] h-4 rounded-lg bg-slate-200"></span>
    </div>
  )
}
export default Skeleton
