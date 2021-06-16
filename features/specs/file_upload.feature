@theInternet @fileUpload
Feature: File Upload
  As an user of the internet application
  Bruce wants to upload a file
  So that he can

  Background:
    Given that Bruce accesses the internet application at the File Uploader page

  @oneFile
  Scenario: Uploading a file
    Given he searches a file named "textFile.txt" from device
    When he confirms the upload file
    Then he should see that the file is uploaded successfuly

  @moreFiles @wip
  Scenario: Uploading more files
    Given he searches the files from device
      | example.png              |
      | just-another-example.png |
      | textFile.txt             |
    # When he confirms the upload file
    # Then he should see that is not possible to sent more files