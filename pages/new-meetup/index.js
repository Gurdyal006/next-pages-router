import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetHandler(enterData) {
    console.log(enterData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>React New Meetup</title>
        <meta
          name="new meetip"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetHandler} />;
    </Fragment>
  );
}

export default NewMeetUpPage;
