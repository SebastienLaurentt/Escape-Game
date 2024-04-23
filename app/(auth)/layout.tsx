const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Layout