function homePingController(req, res) {
    /**
     * Collect the requests
     * Send it to service
     * & then prepare and send response
     */
    return res.json({msg : 'OK'});
}

module.exports = homePingController;