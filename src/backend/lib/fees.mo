import Types "../types/fees";
import List   "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type CollegeFile = Types.CollegeFile;

  /// Add a new college file entry; returns the generated id.
  public func addCollegeFile(
    files    : List.List<CollegeFile>,
    name     : Text,
    fileName : Text,
    fileUrl  : Text,
    nextId   : Nat,
  ) : (CollegeFile, Nat) {
    Runtime.trap("not implemented");
  };

  /// Return all college files sorted alphabetically by name.
  public func listCollegeFiles(files : List.List<CollegeFile>) : [CollegeFile] {
    Runtime.trap("not implemented");
  };

  /// Delete a college file by id. Returns true if deleted, false if not found.
  public func deleteCollegeFile(files : List.List<CollegeFile>, id : Text) : Bool {
    Runtime.trap("not implemented");
  };

  /// Get a single college file by id.
  public func getCollegeFile(files : List.List<CollegeFile>, id : Text) : ?CollegeFile {
    Runtime.trap("not implemented");
  };
};
