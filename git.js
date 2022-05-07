class Github {
    constructor() {
        this.client_id = "4673cde040b6a9c1267c";
        this.client_secret = "b9bc7e1bbcd5d1c5f27c489ec3cd273c4b90da21";
    }

    async getUser(user) {
        const profileResponse = await fetch (
            `https://api.github.com/users/$(user)?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        return {
            profile: profile,
        };
    }
}
