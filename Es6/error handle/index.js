try {
    console.log("start of try ")
    baba
    console.log("end of try ")
} catch (error) {
    console.error(error.message)
    console.error(error.name)
    console.error(error.stack)
}