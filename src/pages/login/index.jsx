// export default function Login() {
//     return (

//         <>
//             <section className="flex justify-between">
//                 <div className="w-1/2 pl-32 pr-8">
//                     <label className="input input-bordered flex items-center gap-2">
//                         Username
//                         <input type="text" className="grow" placeholder="Daisy" />
//                     </label>
//                     <label className="input input-bordered flex items-center gap-2">
//                         Password
//                         <input type="text" className="grow" placeholder="daisy@site.com" />
//                     </label>

//                 </div>
//                 <div className="flex-1"></div>
//                 <div className="pl-32 pr-32 flex justify-center">
//                     <button className="btn">Login</button>
//                 </div>
//             </section>


//         </>
//     )
// }
export default function Login() {
    return (
        <>
            <section className="flex justify-between">
                <div className="w-1/2 pl-32 pr-8">
                    {/* Optional content for the left side */}
                </div>
                <div className="w-1/2 pr-32 flex flex-col items-end gap-4">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        Username
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        Password
                        <input type="password" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <button className="btn">Login</button>
                </div>
            </section>
        </>
    )
}
