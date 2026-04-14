import Types   "../types/fees";
import FeesLib  "../lib/fees";
import List     "mo:core/List";
import Runtime  "mo:core/Runtime";

mixin (
  files  : List.List<Types.CollegeFile>,
  nextId : Nat,
) {
  let adminPassword : Text = "admissionhost2024";

  /// Add a college fee PDF entry. Requires admin password.
  public func addCollegeFile(
    password : Text,
    name     : Text,
    fileName : Text,
    fileUrl  : Text,
  ) : async Text {
    Runtime.trap("not implemented");
  };

  /// List all college fee PDF entries, sorted by name.
  public query func listCollegeFiles() : async [Types.CollegeFile] {
    Runtime.trap("not implemented");
  };

  /// Delete a college fee PDF entry by id. Requires admin password.
  public func deleteCollegeFile(password : Text, id : Text) : async Bool {
    Runtime.trap("not implemented");
  };

  /// Get a single college fee PDF entry by id.
  public query func getCollegeFile(id : Text) : async ?Types.CollegeFile {
    Runtime.trap("not implemented");
  };
};
