/**
 * Created by Administrator on 14-1-12.
 */
var User = new Schema({
    username : String,
    pwd : String
});
mongoose.model("User", User)
