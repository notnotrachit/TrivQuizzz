import { View } from "react-native";
import { useState } from "react";
import styles from "./question.style";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function QuestionScreen({ route, navigation }) {
  const { category_id, category_name } = route.params;
  const [correct_visible, setCorrectVisible] = useState(false);
  const [incorrect_visible, setIncorrectVisible] = useState(false);
  const [question, setQuestion] = useState(null);
  const [question_loading, setQuestionLoading] = useState(true);
  const containerStyle = {
    backgroundColor: "#D9FFF5",
    padding: 20,
    margin: 20,
    borderRadius: 20,
  };

  fetch_question = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=1&category=${category_id}&type=multiple`
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  }

  const unescapeHTML = (str) =>
    str.replace(
      /&amp;|&lt;|&gt;|&#39;|&quot;/g,
      (tag) =>
        ({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&#39;": "'",
          "&quot;": '"',
        }[tag] || tag)
    );

  getQuestion = async () => {
    // setQuestionLoading(true);
    var data = {response_code: 1}
    while (data.response_code != 0){
      var data = await fetch_question();
    }
    console.log(data);
    if (data.response_code == 0) {
      console.log("Success");
    } else {
      getQuestion();
      // console.log("Failure");
    }
    got_question = data.results[0];
    let got_question_all_options = got_question.incorrect_answers;
    got_question_all_options.push(got_question.correct_answer);
    got_question_all_options.sort();
    got_question.all_options = got_question_all_options;
    // console.log(got_question);
    setQuestion(got_question);
    setQuestionLoading(false);
  };

  if (question == null) {
    getQuestion();
  }

  function checkAnswer(answer) {
    if (answer == question.correct_answer) {
      // console.log("Correct!");
      setCorrectVisible(true);
    } else {
      // console.log("Incorrect!");
      setIncorrectVisible(true);
    }
  }

  //   console.log(category_id);
  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={correct_visible}
          onDismiss={() => setCorrectVisible(false)}
          contentContainerStyle={containerStyle}
          dismissable={false}
          dismissableBackButton={false}
        >
          <View>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              Correct Answer
            </Text>
            <Button
              mode="elevated"
              icon={"arrow-right"}
              style={{ width: "50%", margin: "auto" }}
              onPress={() => {
                setCorrectVisible(false);
                setQuestionLoading(true);
                getQuestion();
              }}
            >
              Next Question
            </Button>
          </View>
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={incorrect_visible}
          onDismiss={() => setIncorrectVisible(false)}
          contentContainerStyle={containerStyle}
          dismissable={false}
          dismissableBackButton={false}
        >
          <View>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              Wrong Answer
            </Text>
            <Button
              mode="elevated"
              icon={"arrow-right"}
              style={{ width: "50%", margin: "auto" }}
              onPress={() => {
                setIncorrectVisible(false);
                setQuestionLoading(true);
                getQuestion();
              }}
            >
              Next Question
            </Button>
          </View>
        </Modal>
      </Portal>

      <View style={styles.container}>
        <Text style={styles.header}>{category_name}</Text>
        <View style={styles.question}>
          <Text style={styles.question_text}>
            {question_loading
              ? "Loading..."
              : question && unescapeHTML(question.question)}
          </Text>
        </View>
        {question && !question_loading && (
          <View style={styles.options_btn_container}>
            <Button
              style={styles.option_btn}
              textColor={"#D9FFF5"}
              onPress={() => {
                checkAnswer(question.all_options[0]);
              }}
            >
              {unescapeHTML(question.all_options[0])}
            </Button>
            <Button
              style={styles.option_btn}
              textColor={"#D9FFF5"}
              onPress={() => {
                checkAnswer(question.all_options[1]);
              }}
            >
              {unescapeHTML(question.all_options[1])}
            </Button>
            <Button
              style={styles.option_btn}
              textColor={"#D9FFF5"}
              onPress={() => {
                checkAnswer(question.all_options[2]);
              }}
            >
              {unescapeHTML(question.all_options[2])}
            </Button>
            <Button
              style={styles.option_btn}
              textColor={"#D9FFF5"}
              onPress={() => {
                checkAnswer(question.all_options[3]);
              }}
            >
              {unescapeHTML(question.all_options[3])}
            </Button>
          </View>
        )}
      </View>
    </PaperProvider>
  );
}
