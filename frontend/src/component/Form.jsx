const  Form=()=>{

    return <>
    <div className="bg-purple-200 w-full h-screen ">
       

         
            <div className="ml-60  pt-10 
            rounded-md ">
                <form action="">
                  <div>
                  <h1 className="text-3xl  font-bold ">Student Registration</h1>
                 {/* input form */}
                  <div className="pt-10 flex gap-6 ">
                    <div>
                 <label className="text-xl font-semibold ">First Name:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4" type="text" 
                   placeholder="Fisrt Name"/>
             <br></br>
                <label className="text-xl font-semibold mt-10 ">Last Name:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4 mt-8" type="text" 
                   placeholder="Last Name"/><br></br>
                   <label className="text-xl font-semibold ">Phone Number:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4 mt-8" type="number" 
                   placeholder="Phone Number"/>
                   </div>
                   <div>
                   <label className="text-xl font-semibold ">Midle Name:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4" type="text" 
                   placeholder="Midle Name"/>
             <br></br>
                <label className="text-xl font-semibold mt-10 ">Class Name:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4 mt-8" type="text" 
                   placeholder="Class Name"/><br></br>
                   <label className="text-xl font-semibold ">Address:</label>
                 <input className=" bg-white border-none 
                  rounded-md  outline-none  px-3 py-1 ml-4 mt-8" type="text" 
                   placeholder="Address"/>
                   </div>
                   
                  </div>
                  <button className="bg-purple-500 text-white px-8 py-2 
                   text-2xl  rounded-md mt-20 ml-80">Register</button>
                   <hr className="w-[800px] mt-6"/>
                        


                        <table className=" mt-[3%]">
                            <thead className="bg-purple-500  
                              text-md rounded-md">
                                <tr>
                                    <th className="px-5 py-3">FIRST NAME</th>
                                    <th  className="px-5 py-3">LAST NAME</th>
                                    <th  className="px-5 py-3">MIDLE NAME</th>
                                    <th  className="px-5 py-3">PHONE</th>
                                    <th  className="px-5 py-3">CLASS NAME</th>
                                    <th  className="px-5 py-3">ADDRESS</th>
                                    <th  className="px-5 py-3">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr >
                                   <td className="px-6">sabrin</td> 
                                   <td className="px-6">Mohamud</td>
                                   <td className="px-6">Adan</td>  
                                   <td className="px-6">618131224</td>
                                   <td className="px-6">Ca214</td>  
                                   <td className="px-6">Wadajir</td> 
                                   
                                   <td className="px-6">
                                    <div className="text-xl">
                                    <i class="fa-regular fa-pen-to-square text-yellow-500"></i>
                                    <i class="fa-solid fa-trash-can text-red-500 ml-4"></i>
                                    </div>
                                    </td> 
                                </tr>
                                <tr>
                                    


                                </tr>

                            </tbody>
                        </table>
                  </div>
                 

                </form>
               
            </div>
    </div>
    
    
    </>
}
export default Form