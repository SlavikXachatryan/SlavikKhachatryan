export default function Button({ invert = false, children,className}) {
  return (
    <button className={`rounded-md px-8 py-4 text-white font-semibold transition-all duration-300 ${invert ? "bg-second hover:bg-primary" : "bg-primary hover:bg-second"}`}>{children}</button>
  )
}
