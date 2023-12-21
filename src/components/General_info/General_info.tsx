export default function General_info() {
	return (
        
        <div className="flex justify-center items-center mx-auto bg-black max-w-screen-2xl">
            <div className="desktop:hidden grid mobile:grid-rows-5 mobile:gap-3">
            
                <div className="row-span-1 p-4 font-wilden text-[48px] text-white pb-0">What is JourneyHacks?</div>

                
                <div className="row-span-2 p-4 font-inter text-[24px] text-white">
                    Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Phasellus orci sapien, scelerisque ut mauris nec, tincidunt iaculis diam. 
                Donec et luctus quam, at facilisis nulla. Donec semper mattis enim accumsan elementum. 
                Phasellus nec arcu a enim sollicitudin sollicitudin. 
                </div>

                
                <div className="row-span-2 p-4 font-inter text-[24px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus orci sapien, scelerisque ut mauris nec, tinciduntiua iaculis diam. 
                Donec et luctus quam, at facilisis nulla. Donecebe semper mattis enim accumsan elementum. 
                </div>
            </div>

            
            <div className="hidden desktop:grid desktop:grid-cols-2 desktop:gap-0 desktop:gap-x-10">
            
                <h3 className=" p-4 col-span-1 row-span-1 font-wilden text-[48px] text-white">What is JourneyHacks?</h3>

                
                <div className=" p-4 row-span-3 col-start-1 col-end-2 font-inter text-[24px] text-white">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Phasellus orci sapien, scelerisque ut mauris nec, tincidunt iaculis diam. 
                Donec et luctus quam, at facilisis nulla. Donec semper mattis enim accumsan elementum. 
                Phasellus nec arcu a enim sollicitudin sollicitudin. </div>

            
                <div className=" p-4 row-span-3 col-start-2 col-end-3 font-inter text-[24px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus orci sapien, scelerisque ut mauris nec, tinciduntiua iaculis diam. 
                Donec et luctus quam, at facilisis nulla. Donecebe semper mattis enim accumsan elementum. </div>
            </div>
        </div>
    );
}
