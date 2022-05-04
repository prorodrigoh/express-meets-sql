import connectDB from './db.js'

// const insertQuery = `INSERT INTO pets (
//     pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly
// ) VALUES (?,?,?,?,?,?,?)`

// const inputValues = ['Fluffy', 1, 'Colly', 'Dog', 'Male', true, true]

// const [rows, fields] = await connectDB.promise().query(insertQuery, inputValues)

// console.log('This is the database status', rows)

// creating a function to add any pet

export const createPet = async (petData) => {

    const insertQuery = `INSERT INTO pets (
        pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly
    ) VALUES (?,?,?,?,?,?,?)`;

    const inputValues = [petData.name, petData.age, petData.breed, petData.species, 
        petData.gender, petData.is_hypoallergenic, petData.is_kid_friendly];

    try {
        const [rows, fields] = await connectDB.query(insertQuery, inputValues);
        return rows;
    } catch (err) {
        console.error(err)
    }

}
// const newPet = {
//     name: 'R2',
//     age: '4',
//     breed: 'colly',
//     species: 'Dog',
//     gender: 'Male',
//     is_hypoallergenic: false,
//     is_kid_friendly: true
// }
// console.log(await createPet(newPet))


export const getPets = () => {
    const selectQuery = "Select * from pets";

    return connectDB.query(selectQuery)
        .then(res => {
            return res[0]
        })
        .catch(err => console.error(err))
}
// console.log(await getPets())
