const TabDetail = ({detail}:any) => {
  return (
    <div>
        <h1>{detail[0].name}</h1>
        <p>{detail[0].description}</p>
    </div>
  )
}
export default TabDetail;