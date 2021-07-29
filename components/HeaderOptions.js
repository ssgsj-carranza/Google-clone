import HeaderOption from "./HeaderOption"

function HeaderOptions() {
    return (
        <div>
            {/*left section */}
            <div className="flex space-x-6">
               <HeaderOption /> 
            </div>
            {/* right section*/}
            <div className="flex space-x-4">
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
