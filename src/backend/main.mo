import Types    "types/fees";
import FeesMixin "mixins/fees-api";
import List      "mo:core/List";

actor {
  let collegeFiles : List.List<Types.CollegeFile> = List.empty();
  var nextId : Nat = 0;

  include FeesMixin(collegeFiles, nextId);
};
