function getTime() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
}

class Message {
    author;
    text;
    send_date;

    constructor({
        author,
        text
    }) 
    {
        this.author = author;
        this.text = text;
        this.send_date = getTime();
    }
}


class Messenger {
    messages = [];

    send({
        author,
        text
    }) 
    {
        const message = new Message({ author, text });
        this.messages.push(message);
    }
    show_history() {
        this.messages.forEach(message => {
            console.log(`${message.send_date} ${message.author}: ${message.text}`);
        })
    }
}


let messenger = new Messenger();

messenger.send({ author: "farid", text: "salam" });
messenger.send({ author: "rasim", text: "Aleykum salam" });
messenger.send({ author: "farid", text: "Necesen?)" });
messenger.send({ author: "rasim", text: "sagol sen necesen?)" });

messenger.show_history();