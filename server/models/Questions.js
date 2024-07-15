import mongoose from 'mongoose'

const QuestionSchema  = mongoose.Schema({
    questionTitle: { type: String, required: "Question must have a title"},
    questionBody: { type: String, required: "Question must have a body"},
    questionTags: { type: [String], required: "Question must have a tags"},
    noOfAnswers: { type: Number, default: 0},
    upVote: { type: [String], default: []},
    downVote: { type: [String], default: []},
    userPosted: { type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true},
    // userPosted: { type: String, required:"Questions must have an author"},
    // userId: { type: String},
    askedOn: { type: Date, default:Date.now},
    answer: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now},
    }]
})

export default mongoose.model("Question", QuestionSchema)

// import mongoose from 'mongoose';

// const AnswerSchema = mongoose.Schema({
//     answerBody: String,
//     userAnswered: String,
//     userId: String,
//     answeredOn: { type: Date, default: Date.now }
// });

// const QuestionSchema = mongoose.Schema({
//     questionTitle: String,
//     questionBody: String,
//     questionTags: [String],
//     noOfAnswers: { type: Number, default: 0 },
//     upVote: { type: [String], default: [] },
//     downVote: { type: [String], default: [] },
//     userPosted: String,
//     userId: String,
//     askedOn: { type: Date, default: Date.now },
//     answer: [AnswerSchema]
// });

// export default mongoose.model('Questions', QuestionSchema);
