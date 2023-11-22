import { Icon } from "@iconify/react"
import { useDispatch } from "react-redux";
import { closePopUp } from "../../features/popUpReducer";
import { useState } from "react";
import { useEffect } from "react";


const SelectCategoryPopUp = (
    {
        currentSelected,
        resultFunction,
        filtredServices
    }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const cats = [...new Set(filtredServices?.map(item => {
            return item.category
        }))]
        setCategories(cats)

    }, [filtredServices])


    const dispatcher = useDispatch()



    const [availableItems, setAvailableItems] = useState(categories)



    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleItemClick = (item) => {
        dispatcher(closePopUp())
        resultFunction(item)
    }



    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        const newListBySearch = []
        categories.forEach((mainCategory) => {
            const temp = { ...mainCategory };
            temp.services = []
            mainCategory.services.forEach(subCategory => {
                if (subCategory.title.toLowerCase().includes(value)) {
                    temp.services.push(subCategory)
                }
            })
            if (temp.services.length !== 0)
                newListBySearch.push(temp)

        })

        setAvailableItems(newListBySearch)

    }








    return (
        <div className="select-category-pop-up">
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>
            <div className="pop-up-header">
                <fieldset
                    onFocus={(e) => { e.target.parentElement.parentElement.classList.add("focused") }}
                    onBlur={(e) => { e.target.parentElement.parentElement.classList.remove("focused") }}
                >
                    <legend>
                        <Icon icon="ant-design:select-outlined" />
                        <span>Select Your Category</span>
                    </legend>
                    <div className="search-currency">
                        <input
                            type="text"
                            placeholder="Search Here..."
                            onChange={handleInputChange} />
                        <Icon icon="iconamoon:send-fill" className="search-icon" />
                    </div>
                </fieldset>

            </div>
            <div className="pop-up-body">
                <h1></h1>
                <ul>
                    {
                        categories?.map((item, index) => {
                            return <div
                                className="main-category"
                                key={index}>
                                <h1
                                    className="main-category-header">
                                    <Icon icon="mingcute:right-fill" />
                                    <span>{item}</span>
                                </h1>
                                <div className="sub-categories">
                                    {
                                        filtredServices.filter((service, index) => {
                                            return service.category === item
                                        })
                                            .map((filtred, index) => {
                                                return <li
                                                    key={index}
                                                    className={`sub-category ${currentSelected === filtred ? "selected" : ""}`}
                                                    onClick={() => handleItemClick(filtred)}
                                                >
                                                    {/* <span>{subCategory.symbol}</span> */}
                                                    <span>{filtred.name}</span>
                                                </li>
                                            })
                                    }
                                </div>

                            </div>
                        })
                    }

                </ul>
            </div>


        </div >
    )
}

export default SelectCategoryPopUp