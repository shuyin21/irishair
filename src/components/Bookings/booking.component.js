import React, { useState } from "react";
import styled from "styled-components";
import ArtistContainer from "./booking.artistcontainer";
import { artistData } from "./data";
import DatesAndTime from "./booking.datesandtime";

const BookingComponent = () => {
  const [artistId, setArtistId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayName, setSelectedDayName] = useState("");
  const [bookingTime, setBookingTime] = useState(null);

  const idHandler = (id) => {
    if (artistId != null) {
      setArtistId(null);
    } else {
      setArtistId(id);
    }

    console.log(id);
  };

  const finishBooking = (dayDate, time) => {
    setSelectedDate(dayDate);
    setSelectedDayName(
      dayDate.toLocaleDateString(undefined, { weekday: "long" })
    );
    setBookingTime(time);
    console.log(time);
  };

  const filteredArtists = artistData.filter((artist) => artist.id === artistId);
  return (
    <MainWrapper>
      <InsideWrapper>
        {artistId === null && (
          <Header>Choose Your Stylist for your booking</Header>
        )}
        <ArtistWrapper>
          {artistId != null
            ? filteredArtists.map((artist) => (
                <ArtistContainer
                  idHandler={idHandler}
                  key={artist.id}
                  data={artist}
                />
              ))
            : artistData.map((artist) => (
                <ArtistContainer
                  idHandler={idHandler}
                  key={artist.id}
                  data={artist}
                />
              ))}
          {artistId != null && <DatesAndTime finishBooking={finishBooking} />}
        </ArtistWrapper>
      </InsideWrapper>
    </MainWrapper>
  );
};

export default BookingComponent;

const MainWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsideWrapper = styled.div`
  min-width: 250px;
  max-width: 1080px;
  height: 90%;
`;
const ArtistWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  margin: 20px 0;
`;
