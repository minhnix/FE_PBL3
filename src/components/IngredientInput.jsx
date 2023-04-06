import React from "react";

const IngredientInput = (props) => {

    const ingredientsUnit = ['Bag', "Gram", "Nhóc"]
    const ingredients = ['Tea', 'Milk', '21T_DT']
    var indents = [];
    for (var i = 0; i < props.ingredient; i++) {
        indents.push(
            <div className="faj-center ingredient" style={{ display: "flex", flexDirection: "row-reverse" }}>
                <select name="" id="" style={{ minWidth: "100px", textAlign: "center", height: "30px", borderRadius: "15px" }}>
                    {ingredientsUnit.map(item => <option value={item}>{item}</option>)}
                </select>
                <input
                    required
                    className="m-2 p-2"
                    style={{
                        outline: "0",
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottom: "1px solid black",
                        backgroundColor: "#222e3c",
                        minWidth: "200px",
                        color: "white",
                    }}
                    type="number"
                    placeholder="Count"
                    name=""
                    id=""

                />
                <select name="" id="" style={{ minWidth: "100px", textAlign: "center", height: "30px", borderRadius: "15px" }}>
                    {ingredients.map(item => <option value={item}>{item}</option>)}
                </select>
            </div>
        );
    }
    return indents;
};

export default IngredientInput;
