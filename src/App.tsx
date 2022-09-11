import { useEffect, useState } from 'react'

function App() {
  const [palavra, setPalavra] = useState('magicka')

  const [floatCharIdx, setFloatCharIdx] = useState(1)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFloatCharIdx(prev => prev < palavra.length ? prev + 1 : 0)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [floatCharIdx])
  return (
    <div className='p-3 w-100 h-100 d-flex flex-column align-items-center justify-content-evenly'>
      <div className='mb-3 d-flex w-100 justify-content-center'>
        {palavra.split('').map((char, idx) => {
          return (
            <div
              key={idx}
              className='char'
              style={floatCharIdx === idx ? {position: 'relative', transform: 'translateY(-10px)'} : undefined}
            >
              {char}
            </div>
          )
        })}
      </div>
      <input style={{width: 200}} value={palavra} onChange={e => setPalavra(e.currentTarget.value)} />
    </div>
  )
}

export default App
