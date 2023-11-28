const paginate = async (model, pageNumber, pageSize = 8) => {
    try {
        // Validate page number
        if (!pageNumber || pageNumber < 1) {
            throw new Error("Invalid Page Number!");
        }

        // Calculate total number of documents
        const totalCount = await model.countDocuments();

        // Calculate max page number
        const maxPageNumber = Math.ceil(totalCount / pageSize);



        if (maxPageNumber === 0) {
            return []
        }

        // Validate page number
        if (pageNumber > maxPageNumber) {
            throw new Error("Invalid Page Number!");
        }

        // Retrieve paginated data
        const data = await model
            .find()
            .sort({
                createdAt: -1
            })
            .limit(pageSize)
            .skip((pageNumber - 1) * pageSize);


        return { data, maxPage: maxPageNumber };
    } catch (error) {
        console.log(error)
        throw error;
    }
};

module.exports = paginate