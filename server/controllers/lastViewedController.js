const LastViewedModel = require("../models/LastViewedModel");

module.exports.getLastViewed = async (req, res) => {
    try {
        const userID = req.userID; 
        const lastViewed = await LastViewedModel.find({ user: userID });

        if (lastViewed.length === 0) {
            return res.status(404).json({ message: "Göz atılanlar boş" });
        }


        res.status(200).json({
            message: "Göz atılanlar",
            lastViewed
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Serverda bir hata oluştu" });
    }
};

}