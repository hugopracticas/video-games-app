import './Loading.css';

export const Loading = () => {

  return(
    <div className='container-loading' style={{ flexDirection: 'column' }}>
      <span className="loader"></span>
      <p>Loading Games...</p>
    </div>
  )
}