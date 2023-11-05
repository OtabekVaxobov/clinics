export default function Footer(){
return(
    <>
        <footer className=" dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex justify-center py-8">
                    
                    <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#about" className="mr-4 hover:underline md:mr-6 ">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Rahbariyat</a>
                        </li>
                        <li>
                            <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Hizmatlar narxlari</a>
                        </li>
                        <li>
                            
                            <a href="#kontaktlar" className="hover:underline">Kontaktlar</a>
                            
                        </li>
                    </ul>
                </div>
                
      

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.</span>
            </div>
        </footer>
    </>
)
}


export function Footer2(){
    return(
        <>
         <div className="flex items-center justify-center py-8">

      <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=%D0%92%D0%B8%D0%BB%D0%BE%D1%8F%D1%82%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%B7%D0%B8%20%D0%B3%D1%83%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BD&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{width: 790, height: 500 }}></iframe>
      <style>{`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
      </style>
    
      <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style></div></div>

      </div>
        
       
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-center flex-col ">
            
           
                  <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#about" className="mr-4 hover:underline md:mr-6 ">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Rahbariyat</a>
                        </li>
                        <li>
                            <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Hizmatlar narxlari</a>
                        </li>
                        
                    </ul>
                   <div className="flex flex-col">
                            <p>Manzil: O&apos;zbekiston, Sirdaryo viloyati, 120001, Guliston, ko&apos;chasi BIRLASHGAN, 1uy</p>
                           ____________________
                            <p>Direktor qabulxonasi
                                        67-225-00-87 <br/>
                                            Tezkor aloqa xizmati
                                            67-225-11-43 
                                            <br/>
                                            Qabulxona 67-225-30-18
                            </p>
                       </div>
              
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
            </span>
            
        </div>
    </div>
</footer>
 </>
    )
}