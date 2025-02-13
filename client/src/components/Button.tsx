interface input{
   label: string,
   className ?: string
 
} 

const Button = ({onClick,label , className}:input) => {
  return (
    <div >
       <button onClick={onClick} className={` rounded-2xl px-1 py-1 pt-2 pb-2 cursor-pointer ${className}`}>
            {label}
       </button>
    </div>
  )
}

export default Button
