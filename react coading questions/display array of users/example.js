

const example = () => {
    const users=[
        {name:'sarang',id:1},
        {name:'ram',id:2},
        {name:'sham',id:3},
        {name:'kam',id:4},
    ]
  return (
    <>
        <h3>User Name and Id</h3>
        <ul>
            {
                users.map(user=><li key={user.id}>{user.name}:{user.id}</li>)
            }
        </ul>

    </>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

export default example