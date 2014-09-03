var mongoose=require('mongoose');
mongoose.connect('mongodb://192.168.1.8/test')

var Schema=mongoose.Schema;

var UserSchema=new Schema(
{User_id: String,
User_name: String,
Password: String
});

var user=mongoose.model('User',UserSchema,'User');

function UserDetails(User_name,Password,callback)
{
	user.find({"User_name":User_name,"Password":Password},{_id:0,"User_id":1},function(err,users)	{
		if(err) {
			console.log(err);
			return;
		} else {
			callback(users);
		}	
	});
	
}

module.exports.UserDetails = UserDetails;