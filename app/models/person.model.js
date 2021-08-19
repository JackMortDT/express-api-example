module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      age: Number,
      email: String,
      firstName: String,
      lastName: String
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Person = mongoose.model("person", schema);
  return Person;
};