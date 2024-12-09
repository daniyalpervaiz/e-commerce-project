import React, { ReactNode } from "react"


const Card = ({ children }: { children: ReactNode }) => {
    return (<div>
        <div className='wrapper h-[376px]  mt-[25px]'>
     
            <div className='grid grid-cols-4 sm:grid-col-2 lg:grid-col-4 xl:grid-col-4 gap-[15px]'>
                {children}

            </div>

        </div>
    </div>
    )
}

export default Card

