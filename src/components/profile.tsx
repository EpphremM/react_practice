import image from './../assets/react.svg'
const Profile=()=>{
return(
    <div className='bg-white p-3  border  border-r-4 flex-row place-items-center align-middle justify-center text-center  border-b-4  max-w[60%]  shadow-md  w-max'>
        <img  className='al p-2 align-middle max-w[60%]                  ' src={image} alt="Profile pic" />
        <h2 className='j font-Arial text-black font-bold'>Ephrem</h2>
        <p className=''>This is realy a bad ass</p>
    </div>
)
}
export default Profile;